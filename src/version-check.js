// src/version-check.js
import axios from 'axios';

// 当前版本号，通常可以通过 package.json 中的 version 获取，也可以手动定义
const currentVersion = '1.0.1';

export const checkForUpdates = () => {
    axios.get('/version.json')
        .then(response => {
            const latestVersion = response.data.version;
            if (latestVersion !== currentVersion) {
                // 版本不一致，提示用户更新
                alert('A new version is available. Please refresh the page to update.');
                // 也可以弹出自定义的更新提示框
                // 显示弹窗提示
                showUpdateDialog();
            }
        })
        .catch(error => {
            console.error('Error checking for updates:', error);
        });
};



// 你可以用 Vue 或者其他方式来实现弹窗
const showUpdateDialog = () => {
    const confirmed = confirm("A new version is available. Would you like to update?");
    if (confirmed) {
        window.location.reload(true); // 强制刷新页面
    }
};