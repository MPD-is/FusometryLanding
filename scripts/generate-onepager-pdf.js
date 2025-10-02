import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

async function generatePDF() {
  let server = null;
  let browser = null;

  try {
    console.log('Starting Vite preview server...');
    server = spawn('npm', ['run', 'preview', '--', '--port', '4173'], {
      cwd: projectRoot,
      stdio: 'pipe',
      shell: true
    });

    await new Promise((resolve) => {
      server.stdout.on('data', (data) => {
        const output = data.toString();
        console.log(output);
        if (output.includes('Local:') || output.includes('localhost:4173')) {
          setTimeout(resolve, 2000);
        }
      });
      server.stderr.on('data', (data) => {
        console.error(data.toString());
      });
    });

    console.log('Launching Chromium...');
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    console.log('Navigating to onepager route...');
    await page.goto('http://localhost:4173/onepager?patent=true', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    await page.waitForSelector('.onepager-container', { timeout: 10000 });

    const publicDir = join(projectRoot, 'public');
    if (!existsSync(publicDir)) {
      mkdirSync(publicDir, { recursive: true });
    }

    const pdfPath = join(publicDir, 'Fusometry_CT_OnePager.pdf');

    console.log('Generating PDF...');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '15mm',
        right: '15mm',
        bottom: '15mm',
        left: '15mm'
      }
    });

    console.log(`PDF generated successfully: ${pdfPath}`);

  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  } finally {
    if (browser) {
      await browser.close();
      console.log('Browser closed.');
    }
    if (server) {
      server.kill();
      console.log('Server stopped.');
    }
  }
}

generatePDF().catch((error) => {
  console.error('PDF generation failed:', error);
  process.exit(1);
});
