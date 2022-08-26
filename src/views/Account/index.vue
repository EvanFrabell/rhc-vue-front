<template>
    <default-layout>
        <h1>Account</h1>

        <div v-if="isLoading">Loading account information...</div>
        <PriceSelection v-else-if="!subscription" />
        <SubscribedAccount v-else :subscription="subscription"/>
    </default-layout>
</template>

<script src="./account.js"></script>
<style src="./account.scss" lang="scss" scoped></style>
