#! /usr/bin/sh

APP_ICONS_DIR=appicons
WEB_MANIFEST_FILE=app.webmanifest

# In a default Vite React app the `public` directory will exist and `index.html` will be located in the root.
# For legacy React apps index.html may exist in the `public` directory. This script can handle those cases.
# For Next.js apps only the `public` will exist and the link tags will have to be added manually to `document.[j/t]sx`.
if [ -f "public/index.html" ]; then INDEX_HTML_PATH="index.html"; elif [ -f "index.html" ]; then INDEX_HTML_PATH="../index.html"; fi
if [ ! -d "public" ]; then mkdir -m 755 public; fi

cd public || exit

if [ ! -L $APP_ICONS_DIR ] && [ ! -d $APP_ICONS_DIR ]; then
  ln -s ../node_modules/@amsterdam/design-system-assets/favicon $APP_ICONS_DIR
fi

if [ ! -f $WEB_MANIFEST_FILE ]; then
  cp ../node_modules/@amsterdam/design-system-assets/manifest/app.webmanifest $WEB_MANIFEST_FILE
  printf "The 'app.webmanifest' has been copied to the project. Please edit it with your app's metadata.\n\n"
fi

if [ ! $INDEX_HTML_PATH ]; then
  cd ..
  printf "Finished copying and symlinking the assets, but could not insert the link tags in a non-existant index.html file. Please adjust your HTML Head tags manually.\n\n"
  echo "If you're using Next.js read the documentation on a Custom Document: https://nextjs.org/docs/pages/building-your-application/routing/custom-document"
  exit
fi

if [ -L $APP_ICONS_DIR ] && [ -d $APP_ICONS_DIR ] && ! grep -q '<link rel="icon" href="public\/appicons\/favicon.ico" size="16x16 32x32 64x64" \/>' $INDEX_HTML_PATH; then
  sed -i .bak -e '/<link rel="icon" type="image\//d' $INDEX_HTML_PATH

  # Add the following links to your web app's <head> to get the City of Amsterdam's branding
  # on your web page with an old-fashioned favicon and modern app icons.
  # Adjust the route to the assets accordingly.
  sed -i .bak -e 's/^  <\/head>$/\
    <link rel="icon" href="public\/appicons\/favicon.ico" size="16x16 32x32 64x64" \/>\
    <link rel="icon" href="public\/appicons\/icon.svg" type="image\/svg+xml" \/>\
    <link rel="apple-touch-icon" href="public\/appicons\/apple-touch-icon.png" \/>\
  <\/head>/g' $INDEX_HTML_PATH
fi

if [ -f $WEB_MANIFEST_FILE ] && ! grep -q '<link rel="manifest" href="public\/app.webmanifest" \/>' $INDEX_HTML_PATH; then
  # Add the following links to your web app's <head> to get the City of Amsterdam's branding
  # on your web app with a web manifest and app icons.
  # Adjust the route to the assets accordingly.
  sed -i .bak -e 's/^  <\/head>$/    <link rel="manifest" href="public\/app.webmanifest" \/>\
  <\/head>/g' $INDEX_HTML_PATH
fi

cd ..
echo "Finished copying and symlinking the assets. You can edit the copied Web Manifest and inserted <link> tags and commit those changes to the repository."
