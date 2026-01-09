
import https from 'https';

const url = 'https://docs.google.com/forms/d/e/1FAIpQLSchyWSZ1bcNFcKJ4RYrvHrbya_kh6-pXQY6hlW5S_kzigELfA/viewform';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // Basic regex to find entry IDs
    const entryDetails = data.match(/entry\.\d+/g);
    console.log("Found entries:", entryDetails ? [...new Set(entryDetails)] : "None");
    
    // Also try to find labels associated if possible (harder with regex on minified html)
    // Just dumping the first 2000 chars of relevant sections might be useful
    const fbZx = data.match(/name="fbzx" value="(-?\d+)"/);
    console.log("fbzx:", fbZx ? fbZx[1] : "None");
  });
}).on('error', (e) => {
  console.error(e);
});
