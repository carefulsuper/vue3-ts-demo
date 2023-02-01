新建一个分支的方法
#第一步，切换到你指定的分支。如我要从dev上拉一个分支，代码一模一样
git checkout dev
#第二步，拉取dev的最新代码
git pull
#第三步，在本地创建一个test分支，并切换到该分支。此时执行git branch会看到该分支在本地已创建
git checkout -b test
#第四步，把分支推到远程仓库。此时执行git branch -av可以看到该分支在远程仓库也有了
git push origin test
#第五步，将本地分支与远程分支关联
git branch --set-upstream-to=origin/test test


npm i mitt -S
#引入tsx
npm install @vitejs/plugin-vue-jsx -D
#vite插件
npm install @vue/babel-plugin-jsx
npm install @babel/core
npm install @babel/plugin-transform-typescript
npm install @babel/plugin-syntax-import-meta
npm install @types/babel__core
#引入antfu的插件
npm i unplugin-vue-components -D
