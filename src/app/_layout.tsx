import { router, Slot, usePathname } from 'expo-router'
import { View, StyleSheet, Dimensions } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { IconButton } from '@/app/components/icons-lucide'

export default function Layout() {
    const { height } = Dimensions.get('window');
    const vh = height / 100; // 1% da altura da tela

    const pathname = usePathname()

    // Lista de rotas onde a tab bar NÃO deve aparecer
    const hideTabBarRoutes = ['/', '/singup']

    // Verifica se a rota atual está na lista de rotas para esconder a tab bar
    const shouldShowTabBar = !hideTabBarRoutes.includes(pathname)

    // Mapeamento das rotas e seus ícones correspondentes
    const tabs = [
        {
            route: '/home',
            iconName: 'calendar-alt',
            size: 27,
            label: 'Início'
        },
        {
            route: '/eventos',
            iconName: 'calendar-plus',
            size: 27,
            label: 'Eventos'
        },
        {
            route: '/perfil',
            iconName: 'user-alt',
            size: 25,
            label: 'Perfil'
        },
        {
            route: '/users',
            iconName: 'user-edit',
            size: 25,
            label: 'Usuários'
        },
        {
            route: '/musicas',
            iconName: 'music',
            size: 25,
            label: 'Músicas'
        },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Slot />
            </View>
            {shouldShowTabBar && (
                <View style={styles.tabBar}>
                    {tabs.map((tab) => {
                        const isActive = pathname === tab.route
                        return (
                            <IconButton
                                key={tab.route}
                                Icon={(props) => (
                                    <FontAwesome5
                                        name={tab.iconName}
                                        {...props}
                                        color={isActive ? 'white' : 'black'}
                                    />
                                )}
                                size={tab.size}
                                onPress={() => router.navigate(tab.route)}
                            />
                        )
                    })}
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00988D',
    },
    tabBar: {
        flexDirection: 'row',
        backgroundColor: '#2C6B74',
        paddingVertical: 12,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'space-around',
        height: 90, // Reduzi a altura para 70 (era 100)
    },
    // Adicione este novo estilo
    contentContainer: {
        flex: 1,
        paddingBottom: 70, // Igual à altura da tabBar
    },

})