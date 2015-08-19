## /groups/statistics.json
#### 接口类型
	GET
#### 接口请求地址
	/groups/statistics.json
#### 请求参数
|序号 |参数名 |是否必填 |说明 |
| -------- | -------- |-------- |-------- |  
|1. |city |必填 | |
|2. |time_type |必填 | |
#### 返回接口
```js
{
 "status": "0",
 "msg": "success",
 "list": {
  "statistics": [
   {
    "leader_name": "xxxxxxx",
    "list": [
     {
      "bd_name": "xxxxxxx",
      "order_number": "0",
      "first_order_number": "0",
      "order_amount": "0",
      "list": [
       {
        "name": "xxxxxxx",
        "value": "0"
       }
      ]
     }
    ]
   }
  ]
 }
}
```