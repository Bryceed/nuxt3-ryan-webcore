import { ThemeSwitcher } from '../.nuxt/components';
<template>
    <div>
        <div class="quickMenu" :class="{ 'menu-expanded': drawer }">
            <v-btn icon @click="toggleDrawer" class="mt-2 menu-button">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
            <div class="scrollableArea">
                <v-list class="menu-list bg-transparent text-white mt-2">
                    <div class="_marker" :style="{ top: `${markerPos * 48}px` }"></div> 
                    <v-list-item v-for="(item, index) in items" :key="item.title" link class="menu-block" @click="routeNavigate(item.link); updateItemsActivity()">
                        <v-list-item-icon class="menu-icon">
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content class="menu-item" :class="{ 'ease-hide': !drawer } " :style="{ 'transition-delay': `${index * 100}ms` }">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-list class="menu-footer-list menu-list bg-transparent text-white mt-2">
                    <v-list-item v-for="(item, index) in footerItems" :key="item.title" link class="menu-block" @click="routeNavigate(item.link); updateItemsActivity()">
                        <v-list-item-icon class="menu-icon">
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content class="menu-item" :class="{ 'ease-hide': !drawer } " :style="{ 'transition-delay': `${index * 100}ms` }">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <div class="mx-auto">
                        <ThemeSwitcher />
                    </div>
                </v-list>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    { title: 'Home', icon: 'mdi-home', link: '/' },
                    { title: 'Functions', icon: 'mdi-book-open-page-variant', link: '/functions' },
                    { title: 'About', icon: 'mdi-help-box', link: '/about' },
                    { title: 'Contact', icon: 'mdi-email', link: '/contact' },
                ],
                footerItems: [
                    { title: 'Discord', icon: 'mdi-discord', link: 'https://discord.gg/5g7a5cWBdp' },
                    { title: 'Developer\'s GitHub', icon: 'mdi-github', link: 'https://github.com/Bryceed' },
                    { title: 'Source Code', icon: 'mdi-code-tags', link: 'https://github.com/RyderMais/RYAN' },
                ],
                markerPos: 0,
                drawer: false,
            }
        },

        methods: {
            toggleDrawer() {
                this.drawer = !this.drawer
                // add/remove "menu-expanded" to body tag
                if (this.drawer) document.body.classList.add('has-menu-expanded')
                else document.body.classList.toggle('has-menu-expanded');
                console.log(this.drawer)
            },
            updateDrawer() {
                this.drawer = false
                document.body.classList.remove('has-menu-expanded')
            },
            routeNavigate(link) {
                if (link === this.$route.path) return;
                if (link.includes('http')) return window.open(link, '_blank')

                this.$router.push(link)
                this.updateDrawer()
                this.updateItemsActivity()
            },
            updateItemsActivity() {
                const route = this.$route.path
                const index = this.items.findIndex(item => item.link === route)
                this.markerPos = index

                // animate marker with .animate class
                const marker = document.querySelector('._marker')
                marker.classList.add('animate')
                setTimeout(() => marker.classList.remove('animate'), 200)

                const items = document.querySelectorAll('.v-list-item')
                items.forEach(item => item.classList.remove('active'))
                items[index].classList.add('active')

            }
        },

        mounted() {
            this.updateItemsActivity()
        },

        watch: {
            $route() {
                this.drawer = false
                this.updateItemsActivity()
            },
        },
    }
</script>

<style>
    :root {
        --primary: #7A43E8;
        --primaryComplementar: #A318F4;
        --secondary: #E4AE0D;
        --secondaryComplementar: #F4C318;
        --lightBackground: #F5F5F5;
        --lightBackgroundUnfocused: #c7b6e8;
        --darkBackground: #1A1A1A;
        --darkBackgroundUnfocused: #2A2A2A;
        --light: #FFFFFF;
        --dark: #000000;
        
    }
    body.has-menu-expanded {
        transition: 0.2s ease-out;
        background-color: var(--lightBackgroundUnfocused);
    }
    
    .quickMenu {
        width: 56px;
        height: 100vh;
        transition: 0.2s ease-out;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
        background: linear-gradient(180deg, var(--primary) 64px, var(--primaryComplementar) 100%);
    }

    .menu-expanded {
        width: 256px;
        transition-duration: 0.4s;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }

    .scrollableArea {
        overflow-y: auto;
        overflow-x: hidden;
        height: calc( 100vh - 64px );
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
    .menu-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        transition: 0.2s ease-in-out;
        
    }
    .menu-list ._marker {
        width: 4px;
        height: 36px;
        border-radius: 0 4px 4px 0;
        margin-top: 14px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: var(--secondary);
        transition: 0.25s ease-in-out;
        z-index: 2;
    }
    .menu-list ._marker.animate {
        animation: marker 0.2s ease-in-out;
    }
    .v-list-item__content {
        display: flex !important;
        align-items: center !important;
        transition: 0.2s ease-in-out;
    }
    .menu-expanded .v-list-item__content div:not(.ease-hide) {
        opacity: 1;
        position: relative;
        rotate: 0;
        animation: ease-show 0.2s ease-in-out;
    }
    .ease-hide {
        opacity: 0;
        position: relative;
        rotate: 0;
        animation: ease-hide 0.2s ease-in-out;
    }
    .menu-button {
        position: absolute;
        top: 0;
        left: 0;
        color: var(--secondary) !important;
        background-color: transparent !important;
        box-shadow: none !important;
        margin-right: 4px;
    }
    .menu-icon {
        color: var(--light);
    }
    .menu-footer-list .menu-icon {
        opacity: 0.3;
    }
    .menu-item {
        color: var(--light);
        margin-left: 12px;
    }
    .active {
        background-color: rgba(255, 255, 255, 0.1) !important;
    }
    .menu-block {
        width: 100%;
    }
    
    @keyframes ease-hide {
        0% {
            opacity: 1;
            top: 0;
            left: 0;
            rotate: 0;
        }
        100% {
            opacity: 0;
            top: 10px;
            left: 3px;
            rotate: 20deg;
        }
    }
    @keyframes ease-show {
        0% {
            opacity: 0;
            top: 10px;
            left: 3px;
            rotate: 20deg;
        }
        100% {
            opacity: 1;
            top: 0;
            left: 0;
            rotate: 0;
        }
    }

    @keyframes marker {
        0% {
            height: 36px;
            filter: brightness(1);
        }
        45% {
            height: 12px;
            filter: brightness(1.5);
        }
        100% {
            height: 36px;
            filter: brightness(1);
        }
    }

</style>