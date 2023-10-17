<template>
    <div class="flex flex-row items-start">
        <QuickMenu />
        <div class="grid-container" >
            <HeaderMenu class="grid-menu"/>
            <div class="scrollable-area">
                <div class="p-4 z-2 grid-content">
                    <slot />
                </div>
                <div class="grid-footer">
                    <Footer />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .flex-layout {
        max-height: 100vh;
    }
    .grid-container {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: 64px 1fr auto;
        grid-template-areas: 
            "header"
            "content"
            "footer";
        height: 100vh;
        width: 100vw;
    }
    .grid-menu {
        grid-area: header;
    }
    .grid-content {
        grid-area: content;
    }
    .grid-footer {
        grid-area: footer;
        margin: 0 16px;
        background: #92929247;
        border-radius: 12px 12px 0 0;
        padding: 12px 24px;
    }

    .scrollable-area {
        overflow-y: auto;
        overflow-x: hidden;
        height: calc( 100vh - 64px );
        display: grid;
        grid-template-rows: 1fr auto;
        grid-template-areas: 
            "content"
            "footer";

    }
</style>