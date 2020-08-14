class TreeNode {
	constructor(data = null) {
		this.data = data;
		this.children = [];
	}
	
	addChildren(node) {
		this.children.push(node);
	}
}

class Tree {
	constructor(node) {
		this.root = node;
	}
	
	traverse(node, level = 0) {
		if(node) {
			console.log('-'.repeat(level) + node.data);
			for(let i = 0; i < node.children.length; i++) {
				this.traverse(node.children[i], level + 1);
			}
		} 
	}
}

const ceo = new TreeNode('CEO');
const tree = new Tree(ceo);

const cto = new TreeNode('CTO');
const cfo = new TreeNode('CFO');
const cmo = new TreeNode('CMO');
const coo = new TreeNode('COO');

ceo.addChildren(cto);
ceo.addChildren(cfo);
ceo.addChildren(cmo);
ceo.addChildren(coo);

const seniorArchitect = new TreeNode('Senior Architect');
const softwareEngineer = new TreeNode('Software Engineer');
const userInterfaceDesigner = new TreeNode('User Interface Designer');
const qualityAssuranceEngineer = new TreeNode('Quality Assurance Engineer');

cto.addChildren(seniorArchitect);
seniorArchitect.addChildren(softwareEngineer);
cto.addChildren(qualityAssuranceEngineer);
cto.addChildren(userInterfaceDesigner);
tree.traverse(tree.root);