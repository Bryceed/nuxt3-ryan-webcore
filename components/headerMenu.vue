<template>
    <div class="flex flex-row justify-between headerMenu">
        <div class="_overlay">
            <div class="_overlayRound"></div>
        </div>
        <h2>RYAN BOT</h2>
        <div class="flex flex-row items-center mr-3">
            <AuthButton />
        </div>
    </div>
</template>

<style>
    .headerMenu {
        height: 64px;
        transition: 0.2s ease-out;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: var(--primary);
        color: var(--light);
        position: relative;
    }
    .headerMenu ._overlay {
        width: 16px;
        height: 16px;
        position: absolute;
        bottom: -16px;
        left: 0;
        background-color: var(--primary);
    }
    .headerMenu ._overlayRound {
        width: 16px;
        height: 16px;
        border-radius: 50% 0 0 0;
    }
    
    body.has-menu-expanded .headerMenu ._overlayRound {
        transition: 0.2s ease-out;
        background-color: var(--lightBackgroundUnfocused);
    }

    .headerMenu h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0;
        padding: 0 0 0 .5rem;
        color: var(--light);
    }

    .light .headerMenu ._overlayRound {
        background-color: var(--light);
    }
    .dark .headerMenu ._overlayRound {
        background-color: var(--dark);
    }
</style>