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

  - 刪除產品
  


- 注意:
  1. 要記得加this 、串api 對應格式要正確
  2. 避免資料同步，正確的位置要用淺層拷貝(例如:tempProduct)