function spListMap(name) {
    const list = [];
    list['BrytenUpdates'] = process.env.SHAREPOINT_LIST_UPDATES_ID;
    list['BrytenKB'] = process.env.SHAREPOINT_LIST_KB_ID;
    list['BrytenTrash'] = process.env.SHAREPOINT_LIST_TRASH_ID;
    list['BrytenKBTrash'] = process.env.SHAREPOINT_LIST_KBTRASH_ID;

    return list[name];
}

module.exports = { spListMap };