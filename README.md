# Vue-week3


- 登入
  1. V-model 雙向綁定帳號密碼
  2. 登入api (user，url)
  3. 登入後回傳token 儲存cookie 

- 驗證登入頁面
  1. 取出cookie的token
  2. 驗證預設帶入token
  3. 驗證api ，錯誤跳轉登入 (驗證後再取資料)

- 取得產品資料
  1. 建立data - products
  2. 串接產品 api 取得資料
  3. 渲染至畫面

- 新增、編輯產品
  1. 呼叫 Bootstrap Model(初始化、執行方法)
  2. 綁定v-modal，渲染畫面 (臨時產品)
     補充圖片:
     圖片要用v-for 渲染，並用索引 [key] 代入
     綁定新增圖片按下按鈕push新增、刪除圖片pop刪除
     新增、刪除圖片邏輯:
     1. 選取最後一行(索引值) 如果有資料可以新增，反之沒資料只能刪除
        tempProduct.imagesUrl[tempProduct.imagesUrl.length-1]
     2. 資料判定不是空的，空的可以新增,反之有資料可以刪除

  3. 新增api，代入tempProduct(格式要對)
  4. 新增成功 > 重新取得資料渲染、關閉modal
  --------------------------------------------------------
  綁定Modal，切換新增、編輯狀態
  1. 寫入方法開啟modal (modal.show)
  2. 加入參數切換狀態(新增、刪除)，Data新增 isNew判斷狀態

  編輯產品
  1. 代入狀態及產品至tempProduct(臨時產品)
      新產品為重新初始資料(清空臨時產品)
      編輯產品為代入product至tempProduct(臨時產品)
  2. 用狀態判斷(isNew)要新增還是修改
      如果isNew不為true的話，切換為編輯api，更改方法為put
      如果是新增則不變

  - 刪除產品
  1. 將tempProduct.id(臨時產品)代入選擇參數
  2. 接api代入id

- 注意:
  1. 要記得加this 、串api 對應格式要正確
  2. 避免資料同步，正確的位置要用淺層拷貝(例如:tempProduct)
  3. 啟用1為true 0為false，要在input上綁定      
