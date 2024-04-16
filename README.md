# 短網址產生器
此專案為繳交 ALPHA Camp Dev C3 M6 指標作業 所製作。
運用 Node.js 與 Express 建立本機伺服器，並套用 express-handlbars 作為樣板，伺服器運行期間可執行短網址的產生與重新導向。


## 版本
Ver 1.0.0 (now)


## 功能
* 依輸入網址產生對應的短網址，若輸入已經轉換過的網址則會得到與第一次生成時一樣的短網址。
* 以 json 檔儲存網址資料。
* 將短網址導向原址。
* 短網址無效時，會由瀏覽器顯示錯誤訊息(404)
* copy 按鈕可一鍵複製轉換後的短網址。
* 點擊標題「URL Shortener」可返回首頁。


## 環境建置
* Visual Studio Code - 開發工具
* Git Bash - 指令終端
* Node.js (v18.19.0) - 執行環境
* Express (v4.19.2) - 後端框架
* Express handlebars (v7.1.2) - 樣板引擎


## 安裝與執行步驟
1. Clone 專案至本機(自行cd至指定資料夾位置)
```
git clone https://github.com/c2838/shortURL.git
```
2. 初始化環境
```
cd shortURL //切換至檔案資料夾
npm install //安裝npm套件
```
3. 啟動程式
```
npm run dev
```
4. 當終端機出現以下字樣，表示伺服器已開始回應
```
express server is running on http://localhost:3000
```
5. 至瀏覽器網址列輸入 http://localhost:3000，即可瀏覽我的餐廳清單並進行操作~


## 專案畫面
![Alt text](https://imgur.com/a/qpkCqvh.jpg)
![Alt text](https://imgur.com/a/fTZfGhG.jpg)
