# Alternative Installation Methods

If `npm install` is not working, try these alternatives:

## Option 1: Use npx (No Installation)

Run the portfolio directly without installing dependencies:

```bash
cd ~/Documents/portfolio/-website
./run-with-npx.sh
```

Or manually:
```bash
npx next@latest dev
```

This will download and run Next.js temporarily.

---

## Option 2: Use Yarn

Install yarn and use it instead of npm:

```bash
# Install yarn
npm install -g yarn

# Or on Fedora:
sudo dnf install yarn

# Then install dependencies
cd ~/Documents/portfolio/-website
rm -rf node_modules package-lock.json
yarn install

# Run the dev server
yarn dev
```

---

## Option 3: Use pnpm

Install pnpm (faster alternative):

```bash
# Install pnpm
npm install -g pnpm

# Or:
curl -fsSL https://get.pnpm.io/install.sh | sh -

# Then install dependencies
cd ~/Documents/portfolio/-website
rm -rf node_modules package-lock.json
pnpm install

# Run the dev server
pnpm dev
```

---

## Option 4: Manual npm with --legacy-peer-deps

If there are peer dependency issues:

```bash
cd ~/Documents/portfolio/-website
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run dev
```

---

## Option 5: Use Docker

Run the portfolio in a Docker container:

```bash
cd ~/Documents/portfolio/-website

# Create Dockerfile
cat > Dockerfile << 'EOF'
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
EOF

# Build and run
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## Debugging npm Issues

If npm install keeps failing, check:

1. **Node.js version:**
   ```bash
   node --version  # Should be 18.x or higher
   ```

2. **npm version:**
   ```bash
   npm --version  # Should be 9.x or higher
   ```

3. **Clear all caches:**
   ```bash
   npm cache clean --force
   rm -rf ~/.npm
   rm -rf node_modules package-lock.json
   ```

4. **Check npm logs:**
   ```bash
   npm install --verbose
   ```

5. **Check for permission issues:**
   ```bash
   sudo chown -R $USER:$USER ~/.npm
   sudo chown -R $USER:$USER node_modules
   ```

6. **Reinstall npm:**
   ```bash
   sudo dnf reinstall npm
   ```

---

## Quick Test

To verify your setup works, try this minimal test:

```bash
cd /tmp
mkdir test-next
cd test-next
npm init -y
npm install next@latest react@latest react-dom@latest
```

If this works, the issue might be with your project directory.
If this fails, there's an issue with your npm/node installation.
