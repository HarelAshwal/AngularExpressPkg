# Angular + Express + Pkg + Bootstrap + WebSockets

## Prerequisites

1. install typescript:
   ```
   npm install -g typescript
   ```
   
2. install pkg globally:
   ```
   npm install -g pkg
   ```

3. install angular 5 CLI:
   ```
   npm install -g @angular/cli@1.7.4
   ```

## Installation

1. clone the repo
   ```
   git clone https://github.com/HarelAshwal/AngularExpressPkg.git
   ```

2. install dependencies:
   ```
   cd AngularExpressPkg
   npm i
   cd ./server & npm i
   ```

3. build front-end:
   ```
   cd ..
   ng build
   ```

4. build executable:
   ```
   cd ./server
   tsc -p tsconfig.json
   pkg .
   ```

you're done!
