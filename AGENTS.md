```markdown
# AGENTS.md - Guidelines for AI Coding Agents

These guidelines are designed to ensure the development of high-quality, maintainable, and reliable AI coding agents. Adherence to these principles is mandatory for all development activities within this repository.

## 1. DRY (Don't Repeat Yourself)

*   All logic, data structures, and algorithms should be encapsulated within reusable components.
*   Avoid duplicating code; refactor when appropriate.
*   Favor well-defined abstractions over implicit implementations.

## 2. KISS (Keep It Simple, Stupid)

*   Strive for clarity and simplicity in the code.
*   Minimize complexity where possible.
*   Use intuitive variable names and comments judiciously.
*   Prioritize readability over unnecessary features.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class or module should have a single, well-defined purpose.
*   **Open/Closed Principle:** The system should be extensible through public interfaces, without modifying the internal code.
*   **Liskov Substitution Principle:**  Subclasses must be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:** Each client should be required to see and use only the interface it needs.
*   **Dependency Inversion Principle:** Dependencies should be replaced with abstractions.

## 4. YAGNI (You Aren't Gonna Need It)

*   Only implement features that are explicitly required by the current task.
*   Defer implementation details to later phases or modules.
*   Avoid adding unnecessary functionality; focus on essential requirements.

## 5. Code Length Constraints

*   Each file should not exceed 180 lines of code.
*   Code blocks should be concise and avoid unnecessary whitespace.
*   Use appropriate indentation and formatting for readability.

## 6. Test Coverage Requirements

*   **Minimum Test Coverage:** 80%
*   **Test Case Design:** Each file should have at least 3 comprehensive test cases covering all critical functionalities.
*   **Test Cases:** Test cases must cover all edge cases, boundary conditions, and anticipated user inputs.
*   **Test Case Types:** Implement unit tests, integration tests, and UI tests as needed.
*   **Test Data:** Test data shall be realistic and relevant to the application's use.

## 7. File Structure & Conventions

*   **Root Directory:** The root directory should contain a `README.md` and a `requirements.txt` file.
*   **Module Structure:** Divide the repository into logical modules with well-defined responsibilities.
*   **Naming Conventions:** Follow consistent naming conventions throughout the project (e.g., camelCase for functions, snake_case for variables).
*   **Comments:** Include clear and concise comments explaining complex logic or design decisions.
*   **Documentation:** Provide comprehensive documentation for each module and component, adhering to standard documentation practices.

## 8.  Data Handling

*   All data representations should be consistent and well-documented.
*   Data schemas should be defined using a standardized format (e.g., JSON, YAML).
*   Avoid storing sensitive information in configuration files.  Use environment variables or secure storage.

## 9.  AI Agent Specific Guidelines

*   **Prompt Engineering Support:** Provide clear examples and guidance on prompt engineering best practices.
*   **Response Validation:**  Implement robust validation logic to ensure generated responses are accurate and meet specified constraints.
*   **Error Handling:** Define consistent error handling strategies with informative error messages.
*   **Explainability:** Aim for as much explainability as possible in the agent's reasoning.


These guidelines are intended as a foundational framework.  Further refinements and adjustments may be made as the project progresses.  Regular review and updates are crucial for maintaining the quality and maintainability of the AGENTS.md file.
```