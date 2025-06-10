// Node 클래스 (각 칸의 구조)
class Node {
    constructor(data) {
        this.data = data;     // 저장할 데이터
        this.next = null;     // 다음 노드를 가리키는 포인터
    }
}

// LinkedList 클래스 (기차 전체)
class LinkedList {
    constructor(value) {
        this.head = new Node(value);  // head는 리스트의 첫 번째 노드를 가리킴
    }

    // 맨 끝에 새 노드 추가
    append(value) {
        let cur = this.head;
        while (cur.next !== null) {
            cur = cur.next;
        }
        cur.next = new Node(value);
    }

    // 전체 노드 출력
    printAll() {
        let cur = this.head;
        while (cur !== null) {
            console.log(cur.data);
            cur = cur.next;
        }
    }

    // index번째 노드 반환
    getNode(index) {
        let cur = this.head;
        let curIndex = 0;

        while (curIndex < index) {
            cur = cur.next;
            curIndex++;
        }

        return cur;
    }

    // index번째 위치에 새로운 노드 삽입
    addNode(index, value) {
        const newNode = new Node(value);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        const prevNode = this.getNode(index - 1);
        const nextNode = prevNode.next;

        prevNode.next = newNode;
        newNode.next = nextNode;
    }

    // index번째 노드 삭제
    deleteNode(index) {
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const prevNode = this.getNode(index - 1);
        prevNode.next = prevNode.next.next;
    }
}
