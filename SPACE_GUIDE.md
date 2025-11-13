# Microtools – Space Quick Guide

**Repo chính:** https://github.com/vomodo/microtools

## File quan trọng cần đọc:
- README.md – Overview, cách dùng nhanh
- TOOL_TEMPLATE.md – Tạo tool mới
- STYLE_GUIDE.md – Chuẩn code/style
- AI_CONTEXT.md – Ngữ cảnh & luật AI
- CONTRIBUTING.md – Quy trình add PR

## Quy trình phát triển:
1. Clone/checkout branch mới từ dev
2. Tạo tool theo mẫu TOOL_TEMPLATE.md
3. Import đủ CSS: global, components, tool
4. Test trên nhiều browser/mobile
5. Commit message chuẩn: feat, fix, docs...
6. PR kèm template điền đầy đủ checklist

## Rule AI/dev tối giản:
- Vanilla JS/HTML/CSS, không library/framework
- Không backend, code chạy toàn trình duyệt
- Privacy first, không lưu/tracking
- Style dùng từ assets/css, không trùng lặp file
- Mỗi tool nằm riêng một thư mục packages/[tool-name]

**AI chỉ cần đọc và tuân thủ guide này, tham chiếu file template và style.**