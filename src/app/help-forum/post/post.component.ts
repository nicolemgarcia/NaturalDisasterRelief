import { Component, OnInit , Input} from '@angular/core';
import { HelpForumService } from '../help-forum.service';
import { Post } from '../post';
import { Comment } from '../comment';

@Component({
  selector: 'app-help-forum-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  hasTags: boolean;
  tags: string[];
  @Input() post: Post;

  constructor(private helpForumService: HelpForumService) { }

  ngOnInit() {
    if(this.post.tags == undefined){
      this.hasTags = false;
    } else {
      this.hasTags = true;
      this.tags = this.post.tags;
    }
  }

  updateActive(commentsArray: Comment[]) {
    this.helpForumService
      .updatePost(this.post.key, { comments: commentsArray })
      .catch(err => console.log(err));
  }
 
  deletePost() {
    this.helpForumService
      .deletePost(this.post.key)
      .catch(err => console.log(err));
  }

  postClicked(){
    this.helpForumService.postGet.emit(true);
    this.helpForumService.postClicked.emit(this.post);
  }

}
