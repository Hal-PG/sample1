// お問い合わせフォームの送信ボタンがクリックされた時の処理
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルトの送信を停止

    // 入力値の取得
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // 簡単な入力検証
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('全てのフィールドを入力してください。');
    } else {
        // 入力が正常な場合の処理（ここでは簡単な確認メッセージを表示）
        const confirmationMessage = `以下の内容でお問い合わせを受け付けました。\n\nお名前: ${name}\nメールアドレス: ${email}\nメッセージ: ${message}`;
        alert(confirmationMessage);
        // ここでフォームを送信するための処理を追加することもできます（サーバーへのデータ送信など）
    }
});
