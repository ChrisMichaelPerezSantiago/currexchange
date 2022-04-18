# 💱 CurrExchange

> Foreign currency exchange rates

> > NPM PKG: [currexchange](https://www.npmjs.com/package/currexchange)

# 📚 API Documentation

## `fn converter({ from: string, to: string, amount: number })`

```js
(async () => {
  const data = await converter({ from: 'USD', to: 'EUR', amount: 1 });
})();
```

```json
{
  "amount": "0.9270",
  "code": "EUR",
  "timestamp": "Apr 18, 2022 15:55 UTC"
}
```

## `fn getCurrencies({ defaultCurrency: string, amount: number })`

```js
(async () => {
  const data = await getCurrencies({ defaultCurrency: 'USD', amount: 1 });
})();
```

```json
{
  "ratesTimestamp": "Apr 18, 2022 15:57 UTC",
  "currencies": [
    {
      "country": "Argentine Peso",
      "currencyName": "ARS",
      "currency": 113.552167
    },
    {
      "country": "Australian Dollar",
      "currencyName": "AUD",
      "currency": 1.360368
    },
    { "country": "Bahraini Dinar", "currencyName": "BHD", "currency": 0.376 },
    {
      "country": "Botswana Pula",
      "currencyName": "BWP",
      "currency": 11.514289
    },
    {
      "country": "Brazilian Real",
      "currencyName": "BRL",
      "currency": 4.681556
    },
    {
      "country": "Bruneian Dollar",
      "currencyName": "BND",
      "currency": 1.361736
    }
    // more ...
  ]
}
```

## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.

---

### **:robot: Author**

_*Chris M. Perez*_

> You can follow me on
> [github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright ©2022 [currexchange](https://github.com/ChrisMichaelPerezSantiago/currexchange).

```

```
