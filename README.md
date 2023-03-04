Żeby wrzucić na github-pages trzeba:
- spushować na main ["git add .","git commit -m "" ",git push] 
- zbudować ### ng build --prod --base-href "https://jakubk97.github.io/mieszacz.github.io/"
- potem push za pomocą ### npx angular-cli-ghpages --dir=dist/mieszacz.github.io