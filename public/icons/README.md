# PWA Icons

This directory should contain the following icon files for the PWA:

- icon-72x72.png
- icon-96x96.png
- icon-128x128.png
- icon-144x144.png
- icon-152x152.png
- icon-192x192.png
- icon-384x384.png
- icon-512x512.png

## Quick Setup for Development

**Option 1: Use a placeholder generator online**
Visit https://realfavicongenerator.net/ and generate all sizes from a single image.

**Option 2: Use ImageMagick (if installed)**
```bash
# Create main icon
convert -size 512x512 xc:'#DC2626' -pointsize 200 -fill white -gravity center -annotate +0+0 'FT' icon-512x512.png

# Resize to all sizes
for size in 72 96 128 144 152 192 384; do
  convert icon-512x512.png -resize ${size}x${size} icon-${size}x${size}.png
done
```

**Option 3: Use Node.js script**
Save this as `generate-icons.js` in the project root and run `node generate-icons.js`:
```javascript
// Will be added when needed
```

**Note:** The app will work without icons during development, but you'll see console warnings about missing PWA assets.
