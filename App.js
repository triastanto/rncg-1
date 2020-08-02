import React, { useState } from "react";
import {
	StyleSheet,
	TextInput,
	Text,
	View,
	Button,
	FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);

	const addGoalHandler = (goalTitle) => {
		// This function is not surrounded by curly brace because
		// it directly translates into return statement
		setCourseGoals((currentGoals) => [
			...courseGoals,
			{ id: Math.random().toString(), value: goalTitle },
		]);
	};

	const removeGoalHandler = (goalId) => {
		setCourseGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.id !== goalId);
		});
	};

	return (
		<View style={styles.screen}>
			<GoalInput onAddGoal={addGoalHandler} />
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={courseGoals}
				renderItem={(itemData) => (
					<GoalItem
						id={itemData.item.id}
						title={itemData.item.value}
						onDelete={removeGoalHandler}
					></GoalItem>
				)}
			></FlatList>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	input: {
		width: "80%",
		borderColor: "black",
		borderWidth: 1,
		padding: 10,
	},
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: "#ccc",
		borderColor: "black",
		borderWidth: 1,
	},
});
