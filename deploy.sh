
#abort on errors
set -p

#build
npm run build

#navigate into the build output directory
cd dist

#if you are deploying to a custom domain
#echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:Lmrs300/react-task-example.git main:gh-pages

cd -