# Shop Photos

A small app for sorting shop photos by project and sub-category, then exporting a zip with a folder per sub-category and every photo renamed, like `Trailer-wiring_Wiring_001_20261125.jpg`.

Your photos never leave your phone. This repository only holds the app itself.

## One-time setup on GitHub (about 10 minutes, easiest on a computer)

1. **Unzip** `shop-photos.zip` on your computer. You'll get a folder with 7 files:
   `index.html`, `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `README.md`.
2. Sign in at **github.com**. Click the **+** at the top right, then **New repository**.
   - Repository name: `shop-photos`
   - Choose **Public**. Free accounts need this for GitHub Pages, and only the app code is public, never your photos.
   - Click **Create repository**.
3. On the new repository's page, click the **uploading an existing file** link (or **Add file → Upload files**).
   Drag in **all 7 files** themselves, not the folder they're in, then click **Commit changes**.
4. Go to **Settings → Pages** (Pages is in the left sidebar).
   Under **Build and deployment → Source**, pick **Deploy from a branch**, then branch **main** and folder **/ (root)**, then click **Save**.
5. Wait 1–2 minutes and refresh that Pages screen. It will show your app's address:
   `https://YOUR-USERNAME.github.io/shop-photos/`

## Put it on your phone

1. Open that address in **Chrome** on your Android phone.
2. Tap the **Install as an app on this phone** button on the app's home screen, or use Chrome's **⋮ menu → Install app** (it may say **Add to Home screen**).
3. From then on, open **Shop Photos** from its icon. It works with no signal.

## Using it

- **New project.** Name it and adjust the sub-categories (they become the export folders).
- **Tap a sub-category, then Take photo or Add from gallery.** Photos are filed there. With "All" selected they go to Unsorted.
- **Tap a photo** to move it, add a note, or delete it. **Select** handles several at once.
- **Export.** Pick the whole project or one sub-category.
  - **Download zip** saves to your Downloads folder with the folders and renamed files.
  - **Share photos** sends the renamed photos straight to Drive, Gmail, a text, and so on (no folders).
- **Back up everything** (on the app's main screen) saves one zip of all projects. **Restore from backup** reads it back in, on this phone or a new one. Do a backup now and then. If Chrome's data for the app ever gets cleared, that backup is your copy.

Deleting photos or projects in the app never touches the originals in your gallery.

## Updating the app later

If you get new versions of these files, upload them to the repository the same way (it will replace the old ones). Then, in `sw.js`, change `shop-photos-v1` to `shop-photos-v2` (and so on) so phones fetch the new copy. Your photos and projects are not affected.
