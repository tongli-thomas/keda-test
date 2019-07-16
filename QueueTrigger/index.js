module.exports = async function (context, myQueueItem) {
    context.log('Configured -- JavaScript queue trigger function processed work item', myQueueItem);
};