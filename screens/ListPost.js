import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Button, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ListPost = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigation = useNavigation();

    const fetchPosts = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/posts/listPosts?page=${page}&limit=10`);
            const result = await response.json();
            if (response.status === 200) {
                setPosts(result.data.posts);
                setTotalPages(result.data.totalPages);
            } else {
                Alert.alert('Error', result.message);
            }
        } catch (error) {
            Alert.alert('Error', 'Failed to fetch posts');
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [page]);

    return (
        <View style={styles.outerContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
                <Image source={require("../assets/rightarrow-1.png")} style={styles.backIcon} />
            </TouchableOpacity>
            <View style={styles.container}>
                <FlatList
                    data={posts}
                    keyExtractor={(item) => item.post_id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.postItem}>
                            <Text style={styles.postTitle}>{item.title}</Text>
                            <Text style={styles.postContent}>{item.content}</Text>
                        </View>
                    )}
                    contentContainerStyle={styles.list}
                />
                <View style={styles.pagination}>
                    <TouchableOpacity
                        style={[styles.pageButton, page === 1 && styles.disabledButton]}
                        disabled={page === 1}
                        onPress={() => setPage(page - 1)}
                    >
                        <Text style={styles.pageButtonText}>Previous Page</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.pageButton, page === totalPages && styles.disabledButton]}
                        disabled={page === totalPages}
                        onPress={() => setPage(page + 1)}
                    >
                        <Text style={styles.pageButtonText}>Next Page</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('CreatePost')}>
                    <Text style={styles.createButtonText}>Create New Post</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 16,
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 10,
        zIndex: 1,
    },
    backIcon: {
        width: 24,
        height: 24,
    },
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 16,
        paddingTop: 70,
    },
    list: {
        paddingBottom: 20,
    },
    postItem: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333333',
    },
    postContent: {
        fontSize: 14,
        color: '#666666',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    pageButton: {
        backgroundColor: '#02AE85',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 5,
    },
    disabledButton: {
        backgroundColor: '#cccccc',
    },
    pageButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    createButton: {
        backgroundColor: '#02AE85',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    createButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ListPost;


