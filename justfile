deploy:
  git checkout main
  pnpm run build
  git checkout rendered
  ls | egrep -v "justfile|dist|node_modules" | xargs rm -fr
  mv dist/* .
  git add .
  echo 'done'
  # git push --force-with-lease
