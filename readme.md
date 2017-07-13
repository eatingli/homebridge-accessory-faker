# Homebridge Accressory Faker
偽造成Homekit上的各種配件，接收、回傳狀態，主要為實驗用途。

## 用法
修改 index.js，引入對應的套件(Factory)，就可以模擬成不同的裝置。

## 目錄結構
- services： 純粹實驗套件
- playground：進階功能套件
- reference：參考資源

## 佈署

1. 照著 [Homebridge](https://github.com/nfarina/homebridge) 的步驟，在RaspberryPI上建置環境。

2. 其中必要的 `config.json` 檔案位在此專案的 reference 資料夾下。

3. `config.json` 預設要放在 `~/.homebridge/config.json`

3. 用 -P 指定 Plugins 路徑。
    ```
    $ homebridge -D -U ~/.homebridge-dev -P ../my-great-plugin/
    ```

## 執行

HomeBridge 會自行載入模組並建置環境，在同區網的ios設備上即可找到自己偽造出來的 Accressory。

    $ homebridge -D -U ~/.homebridge-dev -P ../my-great-plugin/

- -U 指定 config.json 路徑
- -P 指定 Plugins 目錄路徑

