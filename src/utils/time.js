/**
 * 获取当前时间戳(10位)
 * @returns 
 */
export const startTime = () => {
    return Math.round(new Date().getTime() / 1000).toString();
}