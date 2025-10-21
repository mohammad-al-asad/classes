export const generateLicenseKey = (): string => {
  const segments = [];
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const segmentLengths = [4, 4, 4, 4]; // Format: XXXX-XXXX-XXXX-XXXX
  
  for (const length of segmentLengths) {
    let segment = '';
    for (let i = 0; i < length; i++) {
      segment += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    segments.push(segment);
  }
  
  return segments.join('-');
};