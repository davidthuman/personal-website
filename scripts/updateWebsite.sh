echo Updating Next JS files from home machine to Linode machine

scp -r website/app/* david@23.239.16.103:./website/app/

scp -r website/components/* david@23.239.16.103:./website/components/

scp -r website/helper/* david@23.239.16.103:./website/helper/

scp -r website/public/* david@23.239.16.103:./website/public/

scp -r website/styles/* david@23.239.16.103:./website/styles/



scp -r website/next.config.js david@23.239.16.103:./website/next.config.js

scp -r website/package-lock.json david@23.239.16.103:./website/package-lock.json

scp -r website/package.json david@23.239.16.103:./website/package.json

scp -r website/postcss.config.js david@23.239.16.103:./website/postcss.config.js

scp -r website/tailwind.config.js david@23.239.16.103:./website/tailwind.config.js

scp -r website/tsconfig.json david@23.239.16.103:./website/tsconfig.json