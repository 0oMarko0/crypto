import { Component } from '@angular/core';
import { TextInputService } from './text-input/text-input.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crypto';
  frequency = [];
  panelOpenState = false;
  selectedTab = 0;

  constructor(private textService: TextInputService) {}


  changeTab() {
    this.selectedTab += 1;
    if (this.selectedTab >= 2) this.selectedTab = 0;
  }

  onClickEmitText() {
    this.textService.emitLetterFrequency('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum quam quis est euismod, sed dictum diam consectetur. Vestibulum laoreet ligula et libero tristique finibus. Aliquam eget libero eu ipsum pharetra aliquet sed sit amet lectus. Maecenas luctus, eros vitae placerat suscipit, nisi enim accumsan augue, et venenatis urna ligula vitae nunc. Fusce tincidunt libero et massa laoreet, sed bibendum lectus ultrices. Morbi tempor nisl pellentesque nunc auctor mollis. Vivamus vel est quam. Aliquam sit amet erat et lectus porttitor accumsan. Phasellus dictum mauris ac nulla consequat euismod. Proin imperdiet magna ut fringilla tempor. Nullam sit amet velit sed dui finibus malesuada.\n' +
      '\n' +
      'Morbi at est et nisi ornare sodales venenatis eget lectus. Etiam vulputate luctus hendrerit. Pellentesque eu massa id elit sagittis commodo a a libero. Nullam luctus consectetur metus egestas vestibulum. Fusce augue urna, tincidunt vel rhoncus tempus, placerat nec erat. Donec iaculis, est vel egestas rutrum, purus nulla bibendum tortor, non hendrerit felis est vitae eros. Vestibulum posuere eros non lobortis faucibus. Nulla id felis at odio consequat porttitor. Maecenas luctus vitae urna et sagittis. Praesent suscipit molestie rutrum. Quisque vel efficitur metus.\n' +
      '\n' +
      'Sed lacinia risus sed metus eleifend, in blandit magna egestas. Mauris aliquam rhoncus efficitur. Curabitur dignissim, dui non blandit faucibus, lacus magna consectetur lorem, a fringilla felis erat sit amet ligula. Praesent nunc turpis, malesuada vitae turpis vitae, bibendum pulvinar lacus. In non aliquam nulla. Cras blandit justo in mi sagittis ultricies. Quisque porta, neque at commodo bibendum, nisi lorem tincidunt libero, a interdum quam odio eu felis. Integer sit amet nibh id dui venenatis vestibulum non in lectus. Phasellus vel tellus lacus. Nulla vitae risus eu tortor finibus cursus sed sed ex. Proin ac orci non dui ultricies imperdiet. Aenean eget odio sapien. Sed rhoncus nisl dolor, sed vehicula lacus faucibus consequat. Duis sed purus at erat interdum ultrices eu non nunc. Praesent dapibus lorem metus, ac viverra quam sagittis eu.\n' +
      '\n' +
      'Aliquam et dapibus dui. Quisque ut pellentesque lacus. Vestibulum condimentum sem efficitur rutrum hendrerit. Nunc tempus mauris elit, ut aliquet arcu eleifend in. Cras at purus id massa tempus lobortis. Morbi sit amet aliquet tellus, non blandit lorem. In ex arcu, tempus sit amet purus nec, iaculis cursus lorem. Praesent diam tellus, semper nec urna nec, tristique tempor nisl. Nunc pharetra pharetra diam id sagittis. Duis consequat, ex venenatis sollicitudin egestas, lectus metus efficitur est, id suscipit ex magna non augue. Sed egestas diam eget gravida tincidunt. Aliquam mattis vehicula vehicula. Ut vitae erat in augue fermentum tincidunt rhoncus sit amet dui. Praesent porttitor ultrices lacus, vitae pretium urna. Vivamus gravida interdum sodales.\n' +
      '\n' +
      'Etiam ac elit tempus, auctor ex id, rutrum arcu. Donec justo dui, dapibus vel facilisis quis, vestibulum sit amet felis. Phasellus blandit, metus sit amet congue consequat, ante dui efficitur purus, egestas laoreet ex arcu eget diam. Etiam vestibulum convallis pellentesque. Mauris commodo pulvinar eros vel accumsan. Ut sagittis nulla pulvinar dictum facilisis. Morbi a fringilla nisl, at tempus magna.');
  }
}
