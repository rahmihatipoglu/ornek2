# Kopya Kağıdı

## İş sırası

- [ ] npm create vue@latest
- [x] iş adı
- [ ] iş adı

todolist

## db.php

```php
<?php
$servername = "localhost";
$DBname     = "dbname";
$username   = "root";
$password   = "root";

try {
$DB = new PDO("mysql:host=$servername;dbname={$DBname}", $username, $password);
// set the PDO error mode to exception
$DB->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//echo "Connected successfully";
} catch(PDOException $e) {
echo "Connection failed: " . $e->getMessage();
}

```

## api.php

```php
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require_once 'db.php';

if (!isset($_GET['method'])) {
die("HATA: API doğru biçimde çağrılmadı!");
}

switch ($_GET['method']) {
case 'get.iller':
    $SQL = "SELECT * FROM iller ORDER BY il_adi";
    $SORGU = $DB->prepare($SQL);
    $SORGU->execute();
    $rows = $SORGU->fetchAll(PDO::FETCH_ASSOC);
    break;

case 'get.ilceler':
    $ID = ($_GET['id']) ?? 0;
    $SQL = "SELECT * FROM ilceler WHERE il_id = :id ORDER BY ilce_adi";
    $SORGU = $DB->prepare($SQL);
    $SORGU->bindParam(':id', $ID);
    $SORGU->execute();
    $rows = $SORGU->fetchAll(PDO::FETCH_ASSOC);
    break;

default:
    die("HATA: `method` adlı değişken için doğru verilerler çağırınız");
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode($rows, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

```

## Pinia Store: stores/userStore.js

```js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = {
    id: '',
    adsoyad: '',
    tc: '',
    eposta: '',
    yas: '',
    sehir_id: '0',
    dersler: 'SQL,XHR'
  }

  return { user }
})
```

## router.js

## app.vue

## view.vue

## componet.vue

## main.js
