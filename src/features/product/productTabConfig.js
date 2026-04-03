export const productTabConfig = [
    {
        key : "detail",
        label : "상세정보",
    },
    {
        key : "review",
        label : "리뷰",
        badge : 12,
        onClick : () => {
            console.log("리뷰 탭 클릭");
        },
    },
    {
        key : "qna",
        label : "문의",
    },
]