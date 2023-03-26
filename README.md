# Reproduction repo for regression in TS v5 related to instantiationCount  

## Working with TypeScript v4

```bash
git clone https://github.com/garronej/typescript-v5-instantiationCount-bug-report
cd typescript-v5-instantiationCount-bug-report
npm install --save-dev typescript@4.9.5
npx tsc # success
```

## Not working wit TypeScript v5

```bash
git clone https://github.com/garronej/typescript-v5-instantiationCount-bug-report
cd typescript-v5-instantiationCount-bug-report
npm install --save-dev typescript@5.0.2
npx tsc # fails with index.ts:19:5 - error TS2589: Type instantiation is excessively deep and possibly infinite.
```

<img width="672" alt="image" src="https://user-images.githubusercontent.com/6702424/227794905-33c36747-8363-4caf-8bfd-c0ec0c51adc0.png">




