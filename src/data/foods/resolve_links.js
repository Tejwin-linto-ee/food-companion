import fs from 'fs';
import path from 'path';

const links = {
  // ITALIAN
  "pizza":                  "https://share.google/TWZhpWkAWxX78B3sX",
  "pizza-margherita":       "https://share.google/gEKjWrjaAGciTUx77",
  "carbonara":              "https://share.google/OTW60bW1YcpS4we1n",
  "bolognese":              "https://share.google/JNJo8UgUahJiXB5M4",
  "lasagna":                "https://share.google/C6a5CTW9b8F9JBy7c",
  "ravioli":                "https://share.google/4RKXI96Bz9iDFlXGR",
  "gnocchi":                "https://share.google/B8wyJoH0ckGoFmHxZ",
  "risotto":                "https://share.google/19va6r08HF3MAybCh",
  "tagliatelle":            "https://share.google/jasSJtUxU8JwbsywI",
  "focaccia":               "https://share.google/KXefC7fkCk9l3BeZM",
  "bruschetta":             "https://share.google/d3RaN7cYdKvHT8r6R",
  "tiramisu":               "https://share.google/E7uvrW0Z3ZSgHkgZz",
  "cannoli":                "https://share.google/AdQKutQM7YOKR3vd0",
  "panna-cotta":            "https://share.google/yaDgGjBYArUKdGXIf",
  "gelato":                 "https://share.google/4WsJEHxM31kbDSl2z",

  // JAPANESE
  "sushi":                  "https://share.google/h2iMP2DJY3e1VYpYN",
  "sashimi":                "https://share.google/v4JIbLBPnU5BkJrVD",
  "ramen":                  "https://share.google/X1bYaA1tZNukAWB2s",
  "udon":                   "https://share.google/mdiX8fgknUf8ux8p3",
  "soba":                   "https://share.google/2p94R00Mo0tmg8eop",
  "tempura":                "https://share.google/zQsQhPAqZtXXX6276",
  "tonkatsu":               "https://share.google/M80xMRixToRxJJABL",
  "yakitori":               "https://share.google/kRLxJVlT69qrVC1VI",
  "okonomiyaki":            "https://share.google/L85Jc5qjpm8sWt4ta",
  "takoyaki":               "https://share.google/tEKda8zKEn1SSYHnO",
  "curry-rice":             "https://share.google/PRL6owvSf0lSKSDRt",
  "donburi":                "https://share.google/izACR71b5eoWK6Irm",
  "gyoza":                  "https://share.google/pK7pVeygAMISon952",
  "onigiri":                "https://share.google/wRzl55vrRbNlnlSC5",
  "bento":                  "https://share.google/qFf7gTfbWhIRjnK0S",
  "mochi":                  "https://share.google/iD9zRQ8Hn7SMYJO8S",

  // CHINESE
  "dim-sum":                "https://share.google/O2g6v2o1U6t6XQbiD",
  "dumplings":              "https://share.google/PuoCUH1x5cxh6iO3l",
  "fried-rice":             "https://share.google/aFCfYY0HjDoxEKQo1",
  "chow-mein":              "https://share.google/Il7lUKibZiX1YpsjW",
  "peking-duck":            "https://share.google/HSvaK4DLGZgc35D74",
  "kung-pao-chicken":       "https://share.google/PeK9Cja9jAlw0BhT4",
  "mapo-tofu":              "https://share.google/NASDxzvOSYI6LleKZ",
  "hot-pot":                "https://share.google/xUS7bamXuIa1Jrbap",
  "bao":                    "https://share.google/3vdddBhWT9eGQnuIX",
  "wontons":                "https://share.google/UmHGuNljfmfqPj30T",
  "chinese-spring-rolls":   "https://share.google/EAPxueHXEMNfRk8TR",

  // KOREAN
  "korean-bbq":             "https://share.google/FnuqSGtlGFS0nZQpP",
  "bibimbap":               "https://share.google/EAbRP5Q7wYSnDaejI",
  "kimchi":                 "https://share.google/k0XUXTiBxrA11XOVC",
  "tteokbokki":             "https://share.google/4vwaDmmuJ0tWGqwPD",
  "japchae":                "https://share.google/bcsdd5tkMokWcihx9",
  "bulgogi":                "https://share.google/MHOOvfSlmw5387ynb",
  "galbi":                  "https://share.google/yKqXR24pmxcnBB95k",
  "korean-fried-chicken":   "https://share.google/Dg5C7Uf7Av70g8dqF",
  "kimchi-jjigae":          "https://share.google/MArGXZdLDQXokSoJD",
  "sundubu-jjigae":         "https://share.google/edil0drg1YLbhHJHr",
  "kimbap":                 "https://share.google/7RrKOLKct7eagI7w3",
  "mandu":                  "https://share.google/NlWP1nFipfiUz5wGw",

  // THAI / SOUTHEAST ASIAN
  "pad-thai":               "https://share.google/KChCqCuTXS8ch0ERa",
  "green-curry":            "https://share.google/HiQYBld0EcOI6oWJF",
  "red-curry":              "https://share.google/x4hAMO5JlBsS6OETS",
  "massaman-curry":         "https://share.google/7j38hFWLVEnlJ7RQy",
  "tom-yum":                "https://share.google/JQXiRnoYsmIKVkeC9",
  "tom-kha":                "https://share.google/ZGKfCyGhAhTCrCjbz",
  "mango-sticky-rice":      "https://share.google/1QbzKVGZf0RegFQlL",
  "laksa":                  "https://share.google/bVf94okAPvLoq1BJx",
  "nasi-goreng":            "https://share.google/3XJZEwVai9r9zCNW2",
  "rendang":                "https://share.google/Ab3VWvyico7CzTKOf",
  "pho":                    "https://share.google/fAOMKfUtL1g1ZeCQ2",
  "banh-mi":                "https://share.google/xkrvs06wIjlJhhieJ",
  "sea-spring-rolls":       "https://share.google/FkHVSuxMkrQAtKbH4",
  "adobo":                  "https://share.google/QVw2eO2OHCASXC5Pl",
  "satay":                  "https://share.google/6HnfRXVqZBBvYyJEU",

  // MEXICAN / LATIN AMERICAN
  "tacos":                  "https://share.google/JDl3wod893v4omFCl",
  "burritos":               "https://share.google/BghCLdRuouOfHJrjz",
  "enchiladas":             "https://share.google/rDWi1TMXsO7NQgxPS",
  "quesadillas":            "https://share.google/eNk2s0qTeNHggTeCl",
  "nachos":                 "https://share.google/HSnDugkqfLKZKyABz",
  "tamales":                "https://share.google/AjlCsElSsi9hJewmR",
  "guacamole":              "https://share.google/VAd3fzKnzLbY54Noo",
  "churros":                "https://share.google/RdP803N3nLzdXLWSk",
  "mole":                   "https://share.google/IKkdjeH3oGhnNYkQV",
  "ceviche":                "https://share.google/a50UrKgvylsTEqGj2",
  "empanadas":              "https://share.google/96qvhSMX3LJcwgWox",
  "arepas":                 "https://share.google/TbG72clitx1RWZJuU",

  // FRENCH
  "croissants":             "https://share.google/rLRlxYDhmZ8Myo8AE",
  "baguette":               "https://share.google/vvch8u1biokkv7xU3",
  "ratatouille":            "https://share.google/HDM4Jod6fmJDoExGM",
  "coq-au-vin":             "https://share.google/d2aUsnkmyFdgX31Dy",
  "beef-bourguignon":       "https://share.google/m4AV5I2NSXl78R9Kp",
  "crepes":                 "https://share.google/evJmbWSSexTXKsWP7",
  "macarons":               "https://share.google/yzbvTtd4EWHd1LiYF",
  "souffle":                "https://share.google/9ZW8q95MfTQpGNSXQ",

  // SPANISH
  "paella":                 "https://share.google/CxNwq4pdIdiP6JMAz",
  "tapas":                  "https://share.google/kUYx0k5ueCxlTA9TO",
  "tortilla-espanola":      "https://share.google/BmVPmWkUoD8ZAn16m",
  "gazpacho":               "https://share.google/40piqo1hiRKaDbNlZ",
  "spanish-churros":        "https://share.google/NhirbNyZpbaLnbsRl",

  // GREEK
  "moussaka":               "https://share.google/X89Lk4Kieob0Ooe3P",
  "souvlaki":               "https://share.google/kPCFhFIzKDdq0pXnL",
  "gyros":                  "https://share.google/C67libjDs4Zqqw9rN",
  "greek-salad":            "https://share.google/MX31elkwJz1MGjNRf",
  "greek-baklava":          "https://share.google/FIkmWfxMJZY6cI3sj",

  // TURKISH
  "turkish-kebab":          "https://share.google/wwFKGsYhKxdba3zLr",
  "doner":                  "https://share.google/pPcloR4Nx8qIhkyvu",
  "lahmacun":               "https://share.google/ZQezA3SR0o3qoF6DP",
  "pide":                   "https://share.google/m8THOzlPizwWfVlo3",
  "meze":                   "https://share.google/RzQMWDPiyxLVvezlx",
  "turkish-baklava":        "https://share.google/C7Ws3RP1eMhLuAJyA",

  // MIDDLE EASTERN
  "hummus":                 "https://share.google/qOSow2BPkV2MrrIXa",
  "falafel":                "https://share.google/LONQ7wNpIu3zJq7fs",
  "shawarma":               "https://share.google/rZVhfSxDR1LiPBtUZ",
  "fattoush":               "https://share.google/9rc0Bx7cMsY0nFHXf",
  "tabouleh":               "https://share.google/brbkweqlMpXqZG4Y7",
  "kebabs":                 "https://share.google/kxG8H3hLe5ntoDDAA",
  "manakish":               "https://share.google/KtV9l8q0PO7CkqHJ1",
  "mezze":                  "https://share.google/wa7qvZNMOWP8kYnWz",

  // AFRICAN
  "injera":                 "https://share.google/8uibBb4T6LPWZ5NuT",
  "doro-wat":               "https://share.google/Vl1cPrJultTL5EIb2",
  "tagine":                 "https://share.google/CguCIG1vmUU3hkmFa",
  "couscous":               "https://share.google/GcDBx4LWLb389xdBe",
  "jollof-rice":            "https://share.google/6wxy41JkmwnUkYvHe",

  // AMERICAN
  "burgers":                "https://share.google/3xTHR19cffCgUAVgu",
  "fried-chicken":          "https://share.google/BSMlVEiWVKC9ANICb",
  "steak":                  "https://share.google/1JixUVM0uBHt8ku5G",
  "pancakes":               "https://share.google/A3GsexhoqXz8K0z5o",
  "waffles":                "https://share.google/VOgiwyTgUz46sO1Pa",
  "mac-and-cheese":         "https://share.google/Z2lm5iJhtQeMcUidg",
  "bbq":                    "https://share.google/X4qDjWF8OO5UvA5Gl",
  "hot-dogs":               "https://share.google/OnNhfYiG3KtXkZHAN",
  "sandwiches":             "https://share.google/hCu7K60nctVC1zl7B",
  "cheesecake":             "https://share.google/yFIqqFEh4auHQpy0J",
  "apple-pie":              "https://share.google/MZEUJXqrJCzNS7aMf",

  // OTHER REGIONAL
  "brazilian-dishes":       "https://share.google/hJ4R7LtLKCB7ZLfa9",
  "peruvian-dishes":        "https://share.google/g8gvCDVrtBIYaLNp1",
  "argentine-dishes":       "https://share.google/EpRS3NRWfsH7qd2EN",
  "caribbean-dishes":       "https://share.google/J7uYL8uhij26tFvvs",
  "portuguese-dishes":      "https://share.google/9I6Fdmy9Av2sQmWDa",
  "german-dishes":          "https://share.google/SfXphMSZSKDz4cpfF",
  "british-dishes":         "https://share.google/GKqvcooCEfqDdNVdQ",
  "scandinavian-dishes":    "https://share.google/pvsaFBjrvASaD3Ifm",
};

async function run() {
  const publicFoodDir = path.join(process.cwd(), 'public', 'food');
  if (!fs.existsSync(publicFoodDir)) {
    fs.mkdirSync(publicFoodDir, { recursive: true });
  }

  let successCount = 0;
  let failCount = 0;

  for (const [id, url] of Object.entries(links)) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const html = await res.text();
      const match = html.match(/imgurl=(.*?)&/);
      if (match && match[1]) {
        const decodedUrl = decodeURIComponent(match[1]);
        const imgRes = await fetch(decodedUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (!imgRes.ok) throw new Error(`HTTP ${imgRes.status}`);
        const arrayBuffer = await imgRes.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        fs.writeFileSync(path.join(publicFoodDir, `${id}.jpg`), buffer);
        console.log(`✓ ${id}.jpg (${Math.round(buffer.length/1024)}kb)`);
        successCount++;
      } else {
        console.warn(`✗ ${id}: no imgurl in page`);
        failCount++;
      }
    } catch (e) {
      console.error(`✗ ${id}: ${e.message}`);
      failCount++;
    }
  }

  console.log(`\nDone: ${successCount} saved, ${failCount} failed.`);
}

run();
