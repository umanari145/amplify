# amplify

amplify + vue のサンプル

## 前提インストール
```
npm install -g @vue/cli
npm install -g @aws-amplify/cli
```

## amplify インストール

```
# チュートリアル形式で全て作られる
amplify init

Scanning for plugins...
Plugin scan successful
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project amplify
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using vue
? Source Directory Path:  src
? Distribution Directory Path: dist
? Build Command:  npm run-script build
? Start Command: npm run-script serve
Using default provider  awscloudformation

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use default
Adding backend environment dev to AWS Amplify Console app: do84xt5214lo5
⠧ Initializing project in the cloud...

cloudformationのログがはかれる

CREATE_COMPLETE amplify-amplify-dev-111635 AWS::CloudFormation::Stack Sun Aug 09 2020 11:17:08 GMT+0900 (日本標準時) 
✔ Successfully created initial AWS cloud resources for deployments.
✔ Initialized provider successfully.
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything
```

デプロイ
```
amplify push

fully pulled backend environment dev from the cloud.

Current Environment: dev

| Category | Resource name   | Operation | Provider plugin   |
| -------- | --------------- | --------- | ----------------- |
| Function | amplify1bb0ba30 | Create    | awscloudformation |
| Auth     | cognito57761d93 | Create    | awscloudformation |
| Api      | api434d2a6b     | Create    | awscloudformation |
? Are you sure you want to continue? Yes
⠙ Updating resources in the cloud. This may take a few minutes...

cloudformationのログ


✔ All resources are updated in the cloud

REST API endpoint: https://lvgfqvymll.execute-api.us-east-1.amazonaws.com/dev

```


## vue インストール
```
npm install aws-amplify
npm install aws-amplify-vue

```


## vueコマンド

### プロジェクト作成
```
vue create プロジェクト名
```

### ホットリロード
```
npm run serve
```

### ビルド
```
npm run build
```

### linter&check
```
npm run lint
```

## 参考URL

https://www.cresco.co.jp/blog/entry/11142/

https://note.com/yiio/n/n8013a2216a08
