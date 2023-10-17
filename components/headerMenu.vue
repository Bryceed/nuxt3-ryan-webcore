<script setup>
const isOpenAlert = ref(false)
const items = [
    [{
    label: 'Choose a version',
    disabled: true
  }],
  [{
    label: 'Stable (recommended)',
    avatar: {
      src: 'https://cdn.discordapp.com/avatars/469613219984441344/4873e8ff41d7a4922ff24c9872cfdde1.webp?size=40'
    },
    click: () => {
        window.open('https://discord.com/api/oauth2/authorize?client_id=469613219984441344&permissions=19252932770935&scope=bot', '_blank')
    }
  },
    {
    label: 'Beta',
    avatar: {
      src: 'https://cdn.discordapp.com/avatars/1150357438223089704/bd903382bfc1a882b04c7ccaa455c1fe.webp?size=40'
    },
    click: () => {
        window.open('https://discord.com/api/oauth2/authorize?client_id=1020962903458840606&permissions=19252932770935&scope=bot', '_blank')
    }
},
    {
    label: 'Dev',
    avatar: {
      src: 'https://cdn.discordapp.com/avatars/486777608265138186/9856b30bc775fa2e83a720642dceb86e.webp?size=40'
    },
    click: () => {
        isOpenAlert.value = true
    }}	
    ]
]
</script>

<template>
    <div class="flex flex-row justify-between headerMenu">
        <div class="_overlay">
            <div class="_overlayRound"></div>
        </div>
        <h1>RYAN BOT</h1>
        <div class="flex flex-row items-center ">
            <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
                <UButton color="transparent" label="Invite bot" trailing-icon="i-heroicons-chevron-down-20-solid" />
            </UDropdown>
            <UModal v-model="isOpenAlert">
                <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                    <template #header>
                        <div class="flex items-center justify-between ">
                            <h3 class="text-base font-semibold leading-2 text-gray-900 dark:text-white">
                            Not available worldwide
                            </h3>
                            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpenAlert = false" />
                        </div>
                    </template>
                    <div class="text-sm text-gray-500">
                        <p>
                            We regret to inform you that the RYAN bot is not currently available for public usage. Due to the fact that there is no guarantee that it will be online 24/7 or fully functional, we cannot recommend its use on your server.
                        </p>
                        <br>
                        <p>
                            RYAN (Dev) is primarily used as a testing environment for new features and resources. As such, we strongly advise against using it in a production environment.
                        </p>
                        <br>
                        <p>
                            However, if you are interested in participating in the development testing of new and fresh resources (while being aware of the potential issues with an unfinished bot), you can join our Discord server via the sidebar menu and request to be included in the testing process by our staff team.
                        </p>
                    </div>
                </UCard>
            </UModal>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    { title: 'Home', icon: 'mdi-home' },
                    { title: 'About', icon: 'mdi-help-box' },
                    { title: 'Contact', icon: 'mdi-email' },
                ],
                drawer: false,
            }
        },
    }
</script>

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
        background-color: var(--light);
        border-radius: 50% 0 0 0;
    }
    body.has-menu-expanded .headerMenu ._overlayRound {
        transition: 0.2s ease-out;
        background-color: var(--lightBackgroundUnfocused);
    }

    .headerMenu h1 {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0;
        padding: 0 0 0 .5rem;
    }
</style>