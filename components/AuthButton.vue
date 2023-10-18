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
        <UDropdown :items="loggedItems" :ui="{ background: 'dark:bg-black', item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-end' }" color="gray" size="sm">

            <UAvatar :src="data.user.image" :alt="data.user.name" size="sm" />

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
            :trailing="false"
            @click="signIn()"
        />
    </div>
</template>