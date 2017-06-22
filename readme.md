# Homebridge Accressory Faker
偽造成Homekit上的各種裝置，接收、回傳狀態，主要為實驗用途。

## 圖片
![0](./img/0.png)

![1](./img/1.png)

## 環境

照著[Homebridge](https://github.com/nfarina/homebridge)的步驟，在RaspberryPI上建置環境。

其中必要的**config.json**檔案位在此專案的reference資料夾下。

本專案資料夾需要放置在 **global node_modules** 中，使得Homebridge可以找到。

(筆者是位在/usr/local/lib/node_modules)

## 執行

``` 
    $ homebridge 
```

homebridge會自行載入模組並建置環境，在同區網的ios設備上即可找到自己偽造出來的 Accressory