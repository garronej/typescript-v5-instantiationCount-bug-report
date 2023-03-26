# Reproduction repo for regression in TS v5 related to instantiationCount  

## Working with TypeScript v4

```bash
git clone https://github.com/garronej/typescript-v5-instantiationCount-bug-report
cd typescript-v5-instantiationCount-bug-report
npm install
npm install --save-dev typescript@4.9.5
npx tsc # success
```

## Not working wit TypeScript v5

```bash
git clone https://github.com/garronej/typescript-v5-instantiationCount-bug-report
cd typescript-v5-instantiationCount-bug-report
npm install
npm install --save-dev typescript@5.0.2
npx tsc # fails
```




