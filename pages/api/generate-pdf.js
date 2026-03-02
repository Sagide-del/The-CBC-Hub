import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id } = req.query;
    
    // Get the HTML template
    const htmlPath = path.join(process.cwd(), 'public/samples/biology-reflex-actions.html');
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    // Remove payment button for preview
    if (req.query.preview === 'true') {
      html = html.replace('<button class="btn-download"', '<button class="btn-download" disabled style="background:#ccc"');
    }
    
    // Launch browser
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Set content
    await page.setContent(html, { waitUntil: 'networkidle0' });
    
    // Generate PDF
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20mm',
        bottom: '20mm',
        left: '15mm',
        right: '15mm'
      }
    });
    
    await browser.close();
    
    // Send PDF
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=biology-reflex-actions.pdf');
    res.send(pdf);
    
  } catch (error) {
    console.error('PDF generation error:', error);
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
}
