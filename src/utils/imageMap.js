const coverModules = import.meta.glob("/src/assets/images/book_img/*.{png,jpg,jpeg,webp,svg}", {
    eager: true,
    import: "default",
});

export function getCoverUrl(fileName) {
    const entry = Object.entries(coverModules).find(([path]) => path.endsWith(`/${fileName}`));

    return entry?.[1] ?? "";
}