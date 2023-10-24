<script setup>
const { status, data, signOut, signIn } = useSession()

let loggedItems = [
    [
        {
            label: 'unknown',
            slot: 'account',
            disabled: true
        }
    ],
    [
        { 
            label: 'Sign out', 
            icon: 'i-mdi-logout', 
            color: 'red', 
            onClick: () => signOut({ callbackUrl: '/' }) 
        }
    ]
]

// change unknown to user name
if (status === 'authenticated') {
    loggedItems[0][0].label = data.user.name
}
</script>

<template>
    <div v-if="status === 'authenticated'">
        <UDropdown :items="loggedItems" :ui="{ background: 'dark:bg-black', item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-end' }" color="gray" size="sm" class="p-1 border-1 border-#FFFFFF22 rounded-full pr-2.5 pl-1.3 bg-#00000033">
            
            <div class="userImage border-white border-1 rounded-full overflow-hidden bg-white dark:bg-gray-800 w-8 h-8">
                <UAvatar 
                :src="data.user.image" 
                :alt="data.user.name" 
                :ui="{ wrapper: 'relative' }"
                size="sm" />
            </div>

            <div class="flex flex-col justify-center ml-1">
                <span class="truncate text-gray-100 dark:text-white font-bold line-height-4 font-size-4 capitalize">
                    {{ data?.user?.name }}
                </span>
                <span class="truncate text-gray-300 dark:text-gray-400 line-height-3 font-size-2.7">
                    {{ data?.user?.email }}
                </span>
            </div>

            <template #account>
                <div class="text-left">
                    <p>
                        Welcome, 
                        <span class="truncate text-gray-900 dark:text-white font-bold">
                            {{ data?.user?.name  }}
                        </span>!
                    </p>
                </div>
            </template>

            <template #item="{ item }">
                <span class="truncate">{{ item.label }}</span>
                <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
            </template>

        </UDropdown>
    </div>
    <div v-else>
        <UButton
            icon="i-simple-icons-discord"
            size="sm"
            :color="isDark ? 'gray' : 'blue'"
            label="Login"
            :ui="{ rounded: 'rounded-full' }"
            :trailing="false"
            @click="signIn('discord')"
        />
    </div>
</template>