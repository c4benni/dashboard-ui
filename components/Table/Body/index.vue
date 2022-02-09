<template>
  <tbody class="border-gray-200 border-y">
    <TableBodyItem
      v-for="(item, i) in content"
      :key="item.company.name + i"
      :index="i"
      v-bind="item"
      :gray="(i + 1) % 2 !== 0"
    />
  </tbody>
</template>

<script>
const content = [
  {
    logo: {
      src: '/img/logo/Avatar.png',
      alt: '',
    },
    company: {
      name: 'Catalog',
      website: 'catalogapp.io',
    },
    licenseUse: 70,
    status: {
      success: true,
      label: 'Customer',
    },
    avatarGroup: Array.from({ length: 9 }, (_, i) => ({
      src: `/img/Avatar (${i + 1}).png`,
      alt: 'avi',
    })),
    about: {
      title: 'Content curating app',
      subtitle: 'Brings all your news into one place',
    },
  },
]

export default {
  name: 'Tablebody',

  data:()=>({
    content: [...content, ...content],
  })
}
</script>
