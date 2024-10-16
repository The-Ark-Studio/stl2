# Bước 1: Sử dụng image refinedev/node:18
FROM refinedev/node:18

# Bước 2: Cài đặt pnpm
RUN npm install -g pnpm

# Bước 3: Thiết lập thư mục làm việc
WORKDIR /stl2/fe

# Bước 4: Sao chép các file cấu hình vào thư mục làm việc
COPY package.json pnpm-lock.yaml* yarn.lock* package-lock.json* .npmrc* ./

# Bước 5: Cài đặt các dependency
RUN pnpm install --frozen-lockfile

# Bước 6: Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Bước 7: Xây dựng ứng dụng
RUN pnpm run build

# Bước 8: Thiết lập biến môi trường và chạy ứng dụng
ENV NODE_ENV production
ENV PORT 2001
EXPOSE 2001

# Chỉ cần chạy lệnh start mà không cần gán PORT trong CMD
CMD ["pnpm", "run", "start"]