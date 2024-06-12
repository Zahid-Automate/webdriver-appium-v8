 Start a project in Visual Studio</br>
 ![image](https://github.com/Zahid-Automate/webdriver-appium-v8/assets/45691238/2f3d0325-e331-4655-a584-5524d663e3b7)


![image](https://github.com/Zahid-Automate/webdriver-appium-v8/assets/45691238/64ffc31a-2351-4e9b-af59-0365f249459a)


 Sample test case result
 ![image](https://github.com/Zahid-Automate/webdriver-appium-v8/assets/45691238/75565c2a-c529-4344-9ebe-cc8c4bfc7626)

 Setting up Babel to use imports with Page object Model

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register
```
Make sure your babel.config.js is configured properly.

The simplest setup you can use is:
```
module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: '20' // update with the target you are aiming for
            }
        }]
    ]
}
```
Video demo showing tests running using babel configuration for android

https://github.com/Zahid-Automate/webdriver-appium-v8/assets/45691238/d507a6fb-167a-4d8f-b17c-156e475c8cfe

Video demo showing test running on iOS

https://github.com/Zahid-Automate/webdriver-appium-v8/assets/45691238/26906322-86ce-4087-bb25-f796b3adccf4



 

 
